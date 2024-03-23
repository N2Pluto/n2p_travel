// this is api/Tourism/update/index.ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { id, name, description, images, operation_time, location, latitude, longitude } = req.body
  const { data, error } = await supabase
    .from('Tourism')
    .update({ name, description, images, operation_time, location, latitude, longitude })
    .eq('id', id)

  if (error) {
    res.status(500).json({ error: error.message })
  } else {
    res.status(200).json(data)
  }
}

export default handler
