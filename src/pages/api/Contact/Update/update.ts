import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { data, error } = await supabase
    .from('Contact')
    .update({ other_column: 'otherValue' })
    .eq('some_column', 'someValue')
    .select()

    res.status(200).json(data)
}

export default handler
