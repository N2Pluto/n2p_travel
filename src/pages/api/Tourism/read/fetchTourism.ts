// this is api/read/fetchTourism.ts
import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { data: Tourism, error } = await supabase.from('Tourism').select('*')

  if (error) {
    console.error(error); // log the error object
    res.status(500).json({ error: 'An error occurred while fetching tourism data.' })
    return
  }

  res.status(200).json(Tourism)
}

export default handler
