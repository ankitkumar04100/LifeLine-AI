from pydantic import BaseModel
from typing import List

class EmergencyModel(BaseModel):
    type: str
    steps: List[str]  # Step-by-step emergency guidance
    severity: int = 1  # Optional severity scale 1-5
