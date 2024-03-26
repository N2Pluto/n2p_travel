// this is api/Tourism/update/index.ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { id, firstname, lastname, phone, facebook, instagram, image } = req.body
  const { data, error } = await supabase
    .from('Contact')
    .update({ firstname, lastname, phone,facebook, instagram,  image })
    .eq('id', id)

  if (error) {
    res.status(500).json({ error: error.message })
  } else {
    res.status(200).json(data)
  }
}

export default handler
