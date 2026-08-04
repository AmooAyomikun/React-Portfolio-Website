from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
import logging
import resend

from .serializers import ContactSubmissionSerializer

logger = logging.getLogger(__name__)

class ContactSubmissionView(APIView):
    @method_decorator(ratelimit(key='ip', rate='5/m', block=True))
    def post(self, request, *args, **kwargs):
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            submission = serializer.save()

            # Attempt to send email
            try:
                resend.api_key = settings.RESEND_API_KEY
                
                subject = f"Portfolio Contact: {submission.name}"
                html_body = f"""
                <h3>New Contact from Portfolio</h3>
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Message:</strong></p>
                <p>{submission.message.replace(chr(10), '<br>')}</p>
                """
                
                r = resend.Emails.send({
                    "from": "onboarding@resend.dev",
                    "to": [settings.CONTACT_EMAIL_RECIPIENT],
                    "reply_to": submission.email,
                    "subject": subject,
                    "html": html_body,
                    "text": f"Name: {submission.name}\nEmail: {submission.email}\n\nMessage:\n{submission.message}"
                })
                
            except Exception as e:
                # Log email failure but don't fail the request since data is saved
                logger.error(f"Failed to send email for submission {submission.id}: {e}")

            return Response({"detail": "Contact submission saved successfully."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
