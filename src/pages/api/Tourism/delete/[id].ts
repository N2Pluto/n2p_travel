// this is api/Tourism/delete/[id].ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { id } = req.query

  const { error } = await supabase.from('Tourism').delete().eq('id', id)

  if (error) {
    res.status(500).json({ error: 'An error occurred while deleting the tourism data.' })
    return
  }

  res.status(200).json({ message: 'Tourism data deleted successfully.' })
}

export default handler
