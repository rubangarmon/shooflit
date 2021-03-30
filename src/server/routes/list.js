import { Router } from "express";
import { createAndLocation } from "../utils/responseFn";
const router = Router();

router.get("/", async (req, res) => {
  const lists = await req.context.models.List.find();
  return res.send(lists);
});

router.get("/:idList", async (req, res) => {
  const list = await req.context.models.List.findById(req.params.idList);
  return res.send(list);
});

router.post("/", async (req, res) => {
  const list = await req.context.models.List.create({
    name: req.body.name,
  });
  return createAndLocation(req, res, list._id);
});

router.put("/:idList", async (req, res) => {
  return await req.context.models.List.findOneAndUpdate(
    { _id: req.params.idList },
    {
      name: req.body.name,
    },
    callback(res)
  );
});

router.delete("/:idList", async (req, res) => {
  return await req.context.models.List.findOneAndDelete(
    { _id: req.params.idList },
    callback(res)
  );
});

const callback = (res) => (err) => {
  if (err) {
    res.send(err);
  } else {
    res.status(204).end();
  }
};

export default router;
