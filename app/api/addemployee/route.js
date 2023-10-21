import prisma from '../../../utils/db'

export async function GET(request){
  const em = await prisma.employee_test.findMany();
  return new Response(JSON.stringify({employee: em}));
}


export async function POST(request){
  const body = await request.json()
  await prisma.employee_test.create({data: body})
  return new Response(JSON.stringify({body}));
}


export async function PUT(request) {
  const body = await request.json()
  await prisma.employee_test.update({
    where: {
      email: body.email,
    },
    data: body,
  })

  return new Response('Updated!')
}


export async function DELETE(request) {
  const body = await request.json()

  await prisma.employee_test.delete({
    where: {
      email: body.email,
    },
  })

  return new Response('Deleted.')
}