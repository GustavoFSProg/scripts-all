import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function register(req, res) {
  try {
    await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
      },
    })

    return res.status(201).send({ msg: 'User created!!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAll(req, res) {
  try {
    const data = await prisma.user.findMany()

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function Update(req, res) {
  try {
    const { id } = req.params

    await prisma.user.update({
      where: { id: id },
      data: {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
      },
    })

    return res.status(200).json({ msg: 'EDITADO!!!!' })
  } catch (error) {
    return res.status(400).json({ msg: 'Tudo Cagado!!!!' })
  }
}

async function remover(req, res) {
  try {
    const { id } = req.params

    await prisma.user.delete({
      where: { id: id },
    })

    return res.status(200).json({ msg: 'APAGADO!!!!' })
  } catch (error) {
    return res.status(400).json({ msg: 'Tudo Cagado!!!!' })
  }
}

export default { register, remover, Update, getAll }
