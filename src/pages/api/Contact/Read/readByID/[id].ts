// this is api/Tourism/read/readByID/[id].ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { id } = req.query
  const { data: Contact, error } = await supabase.from('Contact').select('*').eq('id', id)

  if (error) {
    res.status(500).json({ error: 'An error occurred while fetching Contact data.' })
    return
  }

  if (Contact.length === 0) {
    res.status(404).json({ error: 'No Contact data found with the provided ID.' })
    return
  }

  res.status(200).json(Contact[0])
}
export default handler
