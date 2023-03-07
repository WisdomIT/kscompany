// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createTransport } from "nodemailer"

export default async function handler(req, res) {

  const { solution, budget, schedule, body } = req.body
  console.log(solution, budget, schedule, body)

  try {

    const GMAIL = {
      user: 'wisdomitx@gmail.com',
      password: 'fijwynogqtmmknap'
    }

    const transporter = createTransport({
      service: "gmail",  // 이메일
      auth: {
        user: GMAIL.user,  // 발송자 이메일
        pass: GMAIL.password,  // 발송자 비밀번호
      },
    });

    const mailOptions = {
      from: GMAIL.user,
      to: 'contact@ks-company.kr',
      subject: "KSCOMPANY CONTACT",
      text: `솔루션: ${solution}\n비용: ${budget}\n일정: ${schedule}\n================\n\n${body}`,
    };

    const info = await transporter.sendMail(mailOptions)
    
    res.status(200).json({ ok: true })

  } catch (e) {

    console.error(e)
    res.status(500).json({ ok: false })

  }

}
