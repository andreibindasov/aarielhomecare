export async function POST(request: Request) {
    const formData = await request.formData()
    const email = formData.get('loginEmail')
    const pass = formData.get('loginPass')
    return Response.json({ email, pass })
  }