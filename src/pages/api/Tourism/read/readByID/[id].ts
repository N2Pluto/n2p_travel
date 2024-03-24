// this is api/Tourism/read/readByID/[id].ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { id } = req.query
  const { data: Tourism, error } = await supabase.from('Tourism').select('*').eq('id', id)

  if (error) {
    res.status(500).json({ error: 'An error occurred while fetching tourism data.' })
    return
  }

  if (Tourism.length === 0) {
    res.status(404).json({ error: 'No tourism data found with the provided ID.' })
    return
  }

  res.status(200).json(Tourism[0])
}
export default handler
