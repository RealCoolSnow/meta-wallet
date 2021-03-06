import Head from 'next/head'

type Props = {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} - meta-wallet</title>
    </Head>
  )
}

export default PageTitle
