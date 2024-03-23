import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { error } = await supabase.from('Tourism').delete().eq('some_column', 'someValue')

  res.status(200).json({ error })
}

export default handler
