from models.sosModel import SOSModel
from datetime import datetime

# Placeholder in-memory storage (can be replaced with DB)
sos_requests = []

def create_sos(user_id: str, location: str) -> SOSModel:
    sos = SOSModel(
        user_id=user_id,
        location=location,
        timestamp=datetime.utcnow().isoformat(),
        status="sent"
    )
    sos_requests.append(sos)
    return sos

def get_all_sos():
    return sos_requests
