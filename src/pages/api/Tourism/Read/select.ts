import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { data: Tourism, error } = await supabase.from('Tourism').select('*')
}

export default handler
