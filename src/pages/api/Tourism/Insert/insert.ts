import supabase from '@/libs/supabase'

const handler = async (req: any, res: any) => {
  const { data, error } = await supabase
    .from('Tourism')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
    .select()

    res.status(200).json(data)
}

export default handler
