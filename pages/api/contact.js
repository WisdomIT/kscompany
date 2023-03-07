// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createTransport } from "nodemailer"

export default function handler(req, res) {

  const { solution, budget, schedule, body } = req.body
  console.log(solution, budget, schedule, body)

  res.status(200).json({ name: 'John Doe' })
}
