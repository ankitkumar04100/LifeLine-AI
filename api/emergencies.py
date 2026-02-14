from fastapi import APIRouter

router = APIRouter()

@router.get("/{emergency_type}")
async def get_emergency_protocol(emergency_type: str):
    # Placeholder for fetching emergency protocols
    dummy_protocols = {
        "Heart Attack": ["Call 911", "Check airway", "Start CPR"],
        "Respiratory Emergency": ["Check breathing", "Provide oxygen if trained"],
    }
    return {"emergency_type": emergency_type, "protocols": dummy_protocols.get(emergency_type, [])}
