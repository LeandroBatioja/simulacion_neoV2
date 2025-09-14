from fastapi import APIRouter
from app.models import Meteorito

router = APIRouter()

# almacenamiento temporal en memoria
meteoritos_db = []

@router.post("/meteoritos")
def crear_meteorito(m: Meteorito):
    meteoritos_db.append(m.dict())
    return {"msg": "Meteorito creado con éxito", "meteorito": m}

@router.get("/meteoritos")
def obtener_meteoritos():
    return meteoritos_db
