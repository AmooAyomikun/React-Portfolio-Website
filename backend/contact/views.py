from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
import logging

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
                subject = f"New Portfolio Contact: {submission.name}"
                body = f"Name: {submission.name}\nEmail: {submission.email}\n\nMessage:\n{submission.message}"
                send_mail(
                    subject,
                    body,
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.CONTACT_EMAIL_RECIPIENT],
                    fail_silently=False,
                )
            except Exception as e:
                # Log email failure but don't fail the request since data is saved
                logger.error(f"Failed to send email for submission {submission.id}: {e}")

            return Response({"detail": "Contact submission saved successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
