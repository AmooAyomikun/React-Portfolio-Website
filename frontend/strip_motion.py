import re

def fix_about():
    filepath = r"c:\Users\user\Documents\Portfolio\Portfolio Website\frontend\src\pages\About.jsx"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all motion imports (if any survived)
    content = re.sub(r"import\s*{\s*motion\s*}\s*from\s*'framer-motion';\n?", "", content)

    # Replace <motion.section [ANYTHING UNTIL >] with <section className="animate-fade-in-up">
    # Because some already have className, we will just preserve className if we can, but honestly,
    # the existing classNames in About are:
    # 1. className="max-w-3xl"
    # 2. className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
    # 3. None
    # 4. None
    # 5. None
    # 6. className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
    # 7. None

    def replacer(match):
        inner = match.group(1)
        # Extract className if it exists
        class_match = re.search(r'className="([^"]+)"', inner)
        classes = class_match.group(1) if class_match else ""
        new_classes = f"{classes} animate-fade-in-up".strip()
        return f'<section className="{new_classes}">'
        
    content = re.sub(r"<motion\.section([^>]+)>", replacer, content)
    
    # Replace closing tags
    content = content.replace("</motion.section>", "</section>")
    content = content.replace("</section>", "</section>")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_about()
print("Done fixing About")
