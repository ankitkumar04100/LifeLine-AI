# Placeholder for sending email/SMS alerts
def send_email(to_email: str, subject: str, body: str) -> bool:
    """
    Simulate sending an email.
    In production, integrate with SMTP or an email service like SendGrid.
    """
    print(f"Sending email to {to_email} | Subject: {subject} | Body: {body}")
    return True

def send_sms(phone_number: str, message: str) -> bool:
    """
    Simulate sending an SMS.
    In production, integrate with Twilio or other SMS provider.
    """
    print(f"Sending SMS to {phone_number} | Message: {message}")
    return True
