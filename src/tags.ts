export type Tag =
  | 'html'
  | 'body'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'p'
  | 'blockquote'
  | 'article'
  | 'caption'
  | 'form'
  | 'hr'
  | 'br'
  | 'address'
  | 'aside'
  | 'pre'
  | 'span'
  | 'button'
  | 'label'
  | 'b'
  | 'strong'
  | 'q'
  | 'i'
  | 'em'
  | 'u'
  | 's'
  | 'cite'
  | 'dfn'
  | 'code'
  | 'abbr'
  | 'sup'
  | 'sub'
  | 'a'
  | 'img'
  | 'ul'
  | 'ol'
  | 'li'
  | 'dd'
  | 'dl'
  | 'dt'
  | 'fieldset'
  | 'header'
  | 'footer'
  | 'section'
  | 'table'
  | 'tr'
  | 'td'
  | 'th'
  | 'thead'
  | 'tbody'
  | 'svg'
  | 'line'
  | 'path'
  | 'polyline'
  | 'polygon'
  | 'path'
  | 'rect'
  | 'circle'
  | 'ellipse'
  | 'text'
  | 'tspan'
  | 'g'
  | 'stop'
  | 'defs'
  | 'clipPath'
  | 'linearGradient'
  | 'radialGradient';

// Is the element rendered as a "Text" tag
export const isText: Record<Tag, boolean> & Record<string, boolean> = {
  html: false,
  body: false,
  style: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,

  div: false,
  p: false,
  blockquote: false,
  article: false,
  caption: false,
  form: false,
  hr: false,
  address: false,
  aside: false,
  pre: false,
  fieldset: false,
  header: false,
  footer: false,
  section: false,

  span: true,
  br: true,
  button: true,
  label: true,
  b: true,
  strong: true,
  q: true,
  i: true,
  em: true,
  u: true,
  s: true,
  cite: true,
  dfn: true,
  code: true,
  abbr: true,
  sup: true,
  sub: true,

  a: false,
  img: false,

  table: false,
  tr: false,
  td: false,
  th: false,
  thead: false,
  tbody: false,

  ul: false,
  ol: false,
  li: false,
  dd: false,
  dl: false,
  dt: false,

  svg: false,
  line: false,
  polyline: false,
  polygon: false,
  path: false,
  rect: false,
  circle: false,
  ellipse: false,
  text: false,
  tspan: false,
  g: false,
  stop: false,
  defs: false,
  clipPath: false,
  linearGradient: false,
  radialGradient: false,
};
