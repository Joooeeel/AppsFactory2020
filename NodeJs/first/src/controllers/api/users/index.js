import express from 'express';
import * as UsersModel from "@Models/users";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";
import { getById } from '../../../models/users';

const router = express.Router();

router.post("/login", asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  if (!mail || !pass) return res.send(400);
  const user = await UsersModel.getByEmailAndPassword(mail, pass);

  if (!user) {
    return res.sendStatus(403);
  }
  const token = createToken({ id: user.id });
  res.send(token);
})
);

// GET ALL
router.get('/', asyncHandler(async (req, res) => {
  const data = await UsersModel.get();
  res.send(data);
}));

// GET BY ID
router.get('/:id', asyncHandler(async (req, res) => {
  const { params: { id } } = req;

  //const user = await UsersModel.getById(id);

  //res.send(user);


  /*await UsersModel.remove(id);
  res.send(`User id: ${id} deleted`);*/
}));

//create url
/*router.get('/:mail/:pass', asyncHandler(async (req, res) => {
  const { params: { mail, pass } } = req;

  await UsersModel.create(mail, pass);
  res.send('Usuario creado con exito');
}));*/

//Update con url
router.get('/:id/:ml/:pass', asyncHandler(async (req, res) => {
  const { params: { id, ml, pass } } = req;

  const data = {
    mail: ml,
    password: pass
  };

  await UsersModel.update(id, data);
  res.send('Usuario actualizado');
}));


//Create
router.post("/", asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  await UsersModel.create(mail, pass)
  res.send('Usuario creado con éxito');
}));

// DELETE
router.delete("/:id", restrictedAccess, asyncHandler(async (req, res) => {
  const { params: { id } } = req;
  await UsersModel.remove(id);
  res.send(`User id: ${id} deleted`);
}));

// TOTAL UPDATE
router.put("/:id", restrictedAccess, async (req, res) => {
  const { params: { id }, body } = req;
  await UsersModel.update(id, body);
  res.send(`User id: ${id} updated`);
});

// PARCIAL UPDATE
router.patch("/:id", restrictedAccess, async (req, res) => {

});


router.get("/restricted-path", restrictedAccess, asyncHandler(async (req, res) => {
  const { query: { userId } } = req;
  res.send(`User id: ${req.userId}`);
}));


export default router;