/**
 * switchなど全パターンを試してここの処理が実行されないかの確認。呼ばれない方が正
 * @param exceptNeverType - neverを期待するtype
 */
export const checkNeverType = (exceptNeverType: never) => {
  console.warn('Missing %s', exceptNeverType)
}
