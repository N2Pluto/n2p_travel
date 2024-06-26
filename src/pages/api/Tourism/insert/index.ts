// api/Tourism/insert/index.ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { name, description, imgCover, imgDetail, operation_time, location, latitude, longitude } = req.body
  const { data, error } = await supabase
    .from('Tourism')
    .insert([{ name, description, imgCover, imgDetail, operation_time, location, latitude, longitude }])

  if (error) {
    res.status(500).json({ error: error.message })
  } else {
    res.status(200).json(data)
  }
}

export default handler
