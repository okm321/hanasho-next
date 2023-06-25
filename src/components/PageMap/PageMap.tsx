import { fetchTaxons } from '@/app/api'
import { createPageMapData } from '@/utils'
import { IconWithTitle } from '../title/IconWithTitle'

export async function PageMap() {
  const taxons = await fetchTaxons()
  const pageMapList = createPageMapData(taxons)
  return (
    <>
      {pageMapList.map((pageMap) => {
        return (
          <IconWithTitle
            icon="/images/common/decoration1.png"
            label={pageMap.categoryName}
          />
        )
      })}
    </>
  )
}
