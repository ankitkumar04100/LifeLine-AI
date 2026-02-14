from pydantic import BaseModel

class SOSModel(BaseModel):
    user_id: str
    location: str
    timestamp: str = None  # Optional, auto-filled when sending SOS
    status: str = "pending"  # Status of SOS request
