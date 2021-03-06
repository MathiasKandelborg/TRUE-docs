import SimpleBlockContent from '@components/CMS/PortableText/SimpleBlockContent'
import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { Product } from 'cms/Product'
import singleProductPageStyles from './ProductPage.styles'

interface ISingleProductPageProps {
  product: Product
}

const SingleProductPage: React.FC<ISingleProductPageProps> = (props) => {
  const { product } = props

  const classes = singleProductPageStyles()

  return (
    <CustomAnimatePresence layoutShift>
      <TitleWithDivider key="title" variant="h1" text={product?.title} />

      <PageAnimation key="page">
        <MUI.Grid container component={MUI.Paper} className={classes.paper}>
          <SimpleBlockContent blocks={product?.description} />
        </MUI.Grid>
      </PageAnimation>
    </CustomAnimatePresence>
  )
}

export default SingleProductPage
