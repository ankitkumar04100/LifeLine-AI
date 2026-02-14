from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class SOSRequest(BaseModel):
    user_id: str
    location: str

@router.post("/send")
async def send_sos(request: SOSRequest):
    # Placeholder logic for sending SOS
    if not request.location or not request.user_id:
        raise HTTPException(status_code=400, detail="Missing fields")
    return {"success": True, "message": "SOS sent successfully"}
