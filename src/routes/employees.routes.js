import {Router} from 'express';
const router = Router();

router.get("/empleados", (req, res) => res.send("retornando empleados"))
router.post("/empleados", (req, res) => res.send("creando empleados"))
router.put("/empleados", (req, res) => res.send("editando empleados"))
router.delete("/empleados", (req, res) => res.send("eliminando empleados"))

export default router;
