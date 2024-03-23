import supabase from "@/libs/supabase"


const handler = async (req: any, res: any) => {
  const { data: Contact, error } = await supabase.from('Contact').select('*')

  res.status(200).json(Contact)
}

export default handler
