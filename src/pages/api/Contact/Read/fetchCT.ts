import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { data: Contact, error } = await supabase.from('Contact').select('*')

  if (error) {
    console.error(error); // log the error object
    res.status(500).json({ error: 'An error occurred while fetching tourism data.' })
    return
  }

  res.status(200).json(Contact)
}

export default handler
