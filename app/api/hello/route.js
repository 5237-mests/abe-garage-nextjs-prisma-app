export async function GET(request){
  const usr = [
    {id: 1, name: 'JOe'},
    {id: 2, name: 'YO'},
    {id: 3, name: 'Doe'}
  ];

  return new Response(JSON.stringify(usr));
}


export async function POST(request){
  const body = await request.json()

  return new Response(JSON.stringify({inputData: body}));
}
