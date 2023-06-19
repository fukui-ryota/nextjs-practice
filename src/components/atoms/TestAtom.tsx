
// TestAtomに渡すpropsの型を指定する
type TestAtomProps = {
  text: string;//?がない場合は、必須で渡す必要がある
  url?: string;//値が入ってこない可能性がある場合は?をつける
}

export const TestAtom = (props: TestAtomProps) => {
  // props内からtextとurlを抽出する書き方(props.text,props.urlでもOK)
  const {text,url} = props;
  return(
    <>
      <div>
        {/* textがある場合のみ、要素を表示 */}
        {text && <p>text</p>}
        <img src={url ?? 'https://picsum.photos/200/300'} alt="" />
      </div>
    </>
  )
}
