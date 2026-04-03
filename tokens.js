/**
 * Design Tokens — Token and Typography
 * Source: Figma / AX_Test_1 (node: 15:42923)
 */

// -----------------------------------------------------------------------------
// 1. Primitive (Atomic) Colors
// -----------------------------------------------------------------------------
export const colorPrimitive = {
  white: "#ffffff",
  black: "#000000",

  blue: {
    40: "#0054d1",
    45: "#005eeb",
    50: "#0066ff",
    60: "#3385ff",
  },

  coolNeutral: {
    10: "#171719",
    15: "#1b1c1e",
    50: "#70737c",
    70: "#989ba2",
    96: "#e1e2e4",
    97: "#eaebec",
    98: "#f4f4f5",
    99: "#f7f7f8",
  },

  neutral: {
    20: "#2a2a2a",
    22: "#303030",
    30: "#474747",
    60: "#8a8a8a",
  },

  green: {
    40: "#009632",
    50: "#00bf40",
  },

  orange: {
    39: "#d17600",
    50: "#ff9200",
  },

  red: {
    40: "#e52222",
    50: "#ff4242",
  },

  redOrange: {
    48: "#f55a00",
    50: "#ff5e00",
  },

  lime: {
    37: "#429e00",
    50: "#58cf04",
  },

  cyan: {
    40: "#0098b2",
    50: "#00bdde",
  },

  lightBlue: {
    40: "#008dcf",
    50: "#00aeff",
  },

  violet: {
    45: "#5b37ed",
    50: "#6541f2",
  },

  purple: {
    40: "#ad36e3",
    50: "#cb59ff",
  },

  pink: {
    46: "#e846cd",
    50: "#f553da",
  },
};

// -----------------------------------------------------------------------------
// 2. Semantic Colors
// -----------------------------------------------------------------------------
export const colorSemantic = {
  label: {
    strong:      colorPrimitive.black,
    normal:      colorPrimitive.coolNeutral[10],
    alternative: "#37383c",
    neutral:     "rgba(46, 47, 51, 0.88)",
    assistive:   "rgba(55, 56, 60, 0.28)",
    disable:     "rgba(55, 56, 60, 0.16)",
  },

  static: {
    white: colorPrimitive.white,
    black: colorPrimitive.black,
  },

  primary: {
    normal: colorPrimitive.blue[50],
    strong: colorPrimitive.blue[45],
    heavy:  colorPrimitive.blue[40],
  },

  background: {
    normal:          colorPrimitive.white,
    alternative:     colorPrimitive.coolNeutral[99],
    elevated:        colorPrimitive.white,
    elevatedAlt:     colorPrimitive.coolNeutral[99],
    transparent:     "rgba(255, 255, 255, 0.08)",
    transparentAlt:  "rgba(255, 255, 255, 0.28)",
  },

  interaction: {
    inactive: colorPrimitive.coolNeutral[70],
    disable:  colorPrimitive.coolNeutral[98],
  },

  line: {
    normal:       "rgba(112, 115, 124, 0.41)",
    strong:       "rgba(112, 115, 124, 0.52)",
    neutral:      "rgba(112, 115, 124, 0.16)",
    alternative:  "rgba(112, 115, 124, 0.08)",
    solid:        colorPrimitive.coolNeutral[96],
    solidNeutral: colorPrimitive.coolNeutral[97],
    solidAlt:     colorPrimitive.coolNeutral[98],
  },

  fill: {
    normal:      "rgba(112, 115, 124, 0.08)",
    alternative: "rgba(112, 115, 124, 0.05)",
    strong:      "rgba(112, 115, 124, 0.16)",
  },

  material: {
    dimmer: "rgba(23, 23, 25, 0.52)",
  },

  inverse: {
    primary:    colorPrimitive.blue[60],
    background: colorPrimitive.coolNeutral[15],
    label:      colorPrimitive.coolNeutral[99],
  },

  status: {
    positive:   colorPrimitive.green[50],
    cautionary: colorPrimitive.orange[50],
    negative:   colorPrimitive.red[50],
  },

  accent: {
    bg: {
      redOrange: colorPrimitive.redOrange[50],
      lime:      colorPrimitive.lime[50],
      cyan:      colorPrimitive.cyan[50],
      lightBlue: colorPrimitive.lightBlue[50],
      violet:    colorPrimitive.violet[50],
      purple:    colorPrimitive.purple[50],
      pink:      colorPrimitive.pink[50],
    },
    fg: {
      red:       colorPrimitive.red[40],
      redOrange: colorPrimitive.redOrange[48],
      orange:    colorPrimitive.orange[39],
      lime:      colorPrimitive.lime[37],
      green:     colorPrimitive.green[40],
      cyan:      colorPrimitive.cyan[40],
      lightBlue: colorPrimitive.lightBlue[40],
      blue:      colorPrimitive.blue[45],
      violet:    colorPrimitive.violet[45],
      purple:    colorPrimitive.purple[40],
      pink:      colorPrimitive.pink[46],
    },
  },
};

// -----------------------------------------------------------------------------
// 3. Shadow
// -----------------------------------------------------------------------------
export const shadow = {
  normal: {
    xs: "0 1px 2px -1px rgba(23, 23, 23, 0.10)",
    sm: "0 4px 6px -1px rgba(23, 23, 23, 0.06), 0 2px 4px -2px rgba(23, 23, 23, 0.06)",
    md: "0 10px 15px -3px rgba(23, 23, 23, 0.07), 0 4px 6px -2px rgba(23, 23, 23, 0.07)",
    lg: "0 16px 24px -6px rgba(23, 23, 23, 0.08), 0 6px 10px -4px rgba(23, 23, 23, 0.08)",
    xl: "0 24px 38px -10px rgba(23, 23, 23, 0.12), 0 10px 15px -5px rgba(23, 23, 23, 0.10)",
  },
  spread: {
    sm: "0 0 60px 0 rgba(23, 23, 23, 0.10)",
    md: "0 15px 75px 0 rgba(23, 23, 23, 0.16)",
  },
};

// -----------------------------------------------------------------------------
// 4. Typography
// Font Family: "Pretendard JP"
// letter-spacing unit: px
// -----------------------------------------------------------------------------
export const fontFamily = {
  base: '"Pretendard JP", sans-serif',
};

export const typography = {
  display1: {
    bold:    { fontSize: 56, fontWeight: 700, lineHeight: 1.286, letterSpacing: -3.19 },
    medium:  { fontSize: 56, fontWeight: 500, lineHeight: 1.286, letterSpacing: -3.19 },
    regular: { fontSize: 56, fontWeight: 400, lineHeight: 1.286, letterSpacing: -3.19 },
  },
  display2: {
    bold:    { fontSize: 40, fontWeight: 700, lineHeight: 1.3, letterSpacing: -2.82 },
    medium:  { fontSize: 40, fontWeight: 500, lineHeight: 1.3, letterSpacing: -2.82 },
    regular: { fontSize: 40, fontWeight: 400, lineHeight: 1.3, letterSpacing: -2.82 },
  },
  display3: {
    bold:    { fontSize: 36, fontWeight: 700, lineHeight: 1.334, letterSpacing: -2.7 },
    medium:  { fontSize: 36, fontWeight: 500, lineHeight: 1.334, letterSpacing: -2.7 },
    regular: { fontSize: 36, fontWeight: 400, lineHeight: 1.334, letterSpacing: -2.7 },
  },
  title1: {
    bold:    { fontSize: 32, fontWeight: 700, lineHeight: 1.375, letterSpacing: -2.53 },
    medium:  { fontSize: 32, fontWeight: 500, lineHeight: 1.375, letterSpacing: -2.53 },
    regular: { fontSize: 32, fontWeight: 400, lineHeight: 1.375, letterSpacing: -2.53 },
  },
  title2: {
    bold:    { fontSize: 28, fontWeight: 700, lineHeight: 1.358, letterSpacing: -2.36 },
    medium:  { fontSize: 28, fontWeight: 500, lineHeight: 1.358, letterSpacing: -2.36 },
    regular: { fontSize: 28, fontWeight: 400, lineHeight: 1.358, letterSpacing: -2.36 },
  },
  title3: {
    bold:    { fontSize: 24, fontWeight: 700, lineHeight: 1.334, letterSpacing: -2.3 },
    medium:  { fontSize: 24, fontWeight: 500, lineHeight: 1.334, letterSpacing: -2.3 },
    regular: { fontSize: 24, fontWeight: 400, lineHeight: 1.334, letterSpacing: -2.3 },
  },
  heading1: {
    bold:    { fontSize: 22, fontWeight: 600, lineHeight: 1.364, letterSpacing: -1.94 },
    medium:  { fontSize: 22, fontWeight: 500, lineHeight: 1.364, letterSpacing: -1.94 },
    regular: { fontSize: 22, fontWeight: 400, lineHeight: 1.364, letterSpacing: -1.94 },
  },
  heading2: {
    bold:    { fontSize: 20, fontWeight: 600, lineHeight: 1.4, letterSpacing: -1.2 },
    medium:  { fontSize: 20, fontWeight: 500, lineHeight: 1.4, letterSpacing: -1.2 },
    regular: { fontSize: 20, fontWeight: 400, lineHeight: 1.4, letterSpacing: -1.2 },
  },
  headline1: {
    bold:    { fontSize: 18, fontWeight: 600, lineHeight: 1.445, letterSpacing: -0.02 },
    medium:  { fontSize: 18, fontWeight: 500, lineHeight: 1.445, letterSpacing: -0.02 },
    regular: { fontSize: 18, fontWeight: 400, lineHeight: 1.445, letterSpacing: -0.02 },
  },
  headline2: {
    bold:    { fontSize: 17, fontWeight: 600, lineHeight: 1.412, letterSpacing: 0 },
    medium:  { fontSize: 17, fontWeight: 500, lineHeight: 1.412, letterSpacing: 0 },
    regular: { fontSize: 17, fontWeight: 400, lineHeight: 1.412, letterSpacing: 0 },
  },
  body1Normal: {
    regular: { fontSize: 16, fontWeight: 400, lineHeight: 1.5,   letterSpacing: 0.57 },
    medium:  { fontSize: 16, fontWeight: 500, lineHeight: 1.5,   letterSpacing: 0.57 },
    bold:    { fontSize: 16, fontWeight: 600, lineHeight: 1.5,   letterSpacing: 0.57 },
  },
  body1Reading: {
    regular: { fontSize: 16, fontWeight: 400, lineHeight: 1.625, letterSpacing: 0.57 },
    medium:  { fontSize: 16, fontWeight: 500, lineHeight: 1.625, letterSpacing: 0.57 },
    bold:    { fontSize: 16, fontWeight: 600, lineHeight: 1.625, letterSpacing: 0.57 },
  },
  body2Normal: {
    regular: { fontSize: 15, fontWeight: 400, lineHeight: 1.467, letterSpacing: 0.96 },
    medium:  { fontSize: 15, fontWeight: 500, lineHeight: 1.467, letterSpacing: 0.96 },
    bold:    { fontSize: 15, fontWeight: 600, lineHeight: 1.467, letterSpacing: 0.96 },
  },
  body2Reading: {
    regular: { fontSize: 15, fontWeight: 400, lineHeight: 1.6,   letterSpacing: 0.96 },
    medium:  { fontSize: 15, fontWeight: 500, lineHeight: 1.6,   letterSpacing: 0.96 },
    bold:    { fontSize: 15, fontWeight: 600, lineHeight: 1.6,   letterSpacing: 0.96 },
  },
  label1Normal: {
    bold:    { fontSize: 14, fontWeight: 600, lineHeight: 1.429, letterSpacing: 1.45 },
    medium:  { fontSize: 14, fontWeight: 500, lineHeight: 1.429, letterSpacing: 1.45 },
    regular: { fontSize: 14, fontWeight: 400, lineHeight: 1.429, letterSpacing: 1.45 },
  },
  label1Reading: {
    bold:    { fontSize: 14, fontWeight: 600, lineHeight: 1.571, letterSpacing: 1.45 },
    medium:  { fontSize: 14, fontWeight: 500, lineHeight: 1.571, letterSpacing: 1.45 },
    regular: { fontSize: 14, fontWeight: 400, lineHeight: 1.571, letterSpacing: 1.45 },
  },
  label2: {
    regular: { fontSize: 13, fontWeight: 400, lineHeight: 1.385, letterSpacing: 1.94 },
    bold:    { fontSize: 13, fontWeight: 600, lineHeight: 1.385, letterSpacing: 1.94 },
  },
  caption1: {
    regular: { fontSize: 12, fontWeight: 400, lineHeight: 1.334, letterSpacing: 2.52 },
    medium:  { fontSize: 12, fontWeight: 500, lineHeight: 1.334, letterSpacing: 2.52 },
    bold:    { fontSize: 12, fontWeight: 600, lineHeight: 1.334, letterSpacing: 2.52 },
  },
  caption2: {
    regular: { fontSize: 11, fontWeight: 400, lineHeight: 1.273, letterSpacing: 3.11 },
    medium:  { fontSize: 11, fontWeight: 500, lineHeight: 1.273, letterSpacing: 3.11 },
    bold:    { fontSize: 11, fontWeight: 600, lineHeight: 1.273, letterSpacing: 3.11 },
  },
};

// -----------------------------------------------------------------------------
// 5. Breakpoint
// -----------------------------------------------------------------------------
export const breakpoint = {
  xs: 0,     // ~767px    모바일
  sm: 768,   // ~991px    태블릿 세로
  md: 992,   // ~1199px   태블릿 가로
  lg: 1200,  // ~1599px   데스크톱
  xl: 1600,  //  1600px+  대형 데스크톱
};

// -----------------------------------------------------------------------------
// 6. Spacing (4px base scale, unit: px)
// 0.5 / 1 / 2 — 시각 보정용 / 4 단위 — 기본 간격
// -----------------------------------------------------------------------------
export const spacing = {
  0.5: 0.5,
  1:   1,
  2:   2,
  4:   4,
  6:   6,
  8:   8,
  10:  10,
  12:  12,
  14:  14,
  16:  16,
  20:  20,
  24:  24,
  32:  32,
  40:  40,
  48:  48,
  56:  56,
};

// -----------------------------------------------------------------------------
// 7. Layout — Column Grid
// Gutter: 20px / Margin: 20px (전 브레이크포인트 공통)
// -----------------------------------------------------------------------------
export const grid = {
  gutter: 20,
  margin: 20,
  xs: { columns: 2,  containerMax: null },    // fluid
  sm: { columns: 3,  containerMax: null },    // fluid
  md: { columns: 3,  containerMax: null },    // fluid
  lg: { columns: 12, containerMax: 1100 },
  xl: { columns: 12, containerMax: 1440 },
};

// -----------------------------------------------------------------------------
// 8. Icon
// 실제 아이콘: 24×24px / 표시 프레임: 64×64px (패딩 20px)
//
// catalog 구조:
//   category   — "normal" | "color" | "navigation"
//   thick      — true: 굵은 획 variant 지원
//   small      — true: 소형 variant 지원
//   tight      — true: 좁은 폭 variant 지원 (12×24px, Chevron 전용)
//
// 사용 예:
//   const props = icon.catalog["Bell"];
//   // → { category: "normal", thick: true, small: false, tight: false }
//   <Icon name="Bell" thick={props.thick} />
// -----------------------------------------------------------------------------
export const icon = {
  size:  24,
  frame: 64,

  catalog: {
    // ── normal / single variant ──────────────────────────────────────────────
    "Align Center":          { category: "normal", thick: false, small: false, tight: false },
    "Align Justify":         { category: "normal", thick: false, small: false, tight: false },
    "Align Left":            { category: "normal", thick: false, small: false, tight: false },
    "Align Right":           { category: "normal", thick: false, small: false, tight: false },
    "Android":               { category: "normal", thick: false, small: false, tight: false },
    "Apps":                  { category: "normal", thick: false, small: false, tight: false },
    "Arrow Turn Down Left":  { category: "normal", thick: false, small: false, tight: false },
    "Arrow Turn Down Right": { category: "normal", thick: false, small: false, tight: false },
    "Attachment":            { category: "normal", thick: false, small: false, tight: false },
    "Bell Plus":             { category: "normal", thick: false, small: false, tight: false },
    "Bold":                  { category: "normal", thick: false, small: false, tight: false },
    "Bulb":                  { category: "normal", thick: false, small: false, tight: false },
    "Calendar":              { category: "normal", thick: false, small: false, tight: false },
    "Caret Down":            { category: "normal", thick: false, small: false, tight: false },
    "Caret Up":              { category: "normal", thick: false, small: false, tight: false },
    "Certificate":           { category: "normal", thick: false, small: false, tight: false },
    "Change":                { category: "normal", thick: false, small: false, tight: false },
    "Chat":                  { category: "normal", thick: false, small: false, tight: false },
    "Circle Block":          { category: "normal", thick: false, small: false, tight: false },
    "Circle Dot":            { category: "normal", thick: false, small: false, tight: false },
    "Circle Point":          { category: "normal", thick: false, small: false, tight: false },
    "Code":                  { category: "normal", thick: false, small: false, tight: false },
    "Column":                { category: "normal", thick: false, small: false, tight: false },
    "Copy":                  { category: "normal", thick: false, small: false, tight: false },
    "Dot":                   { category: "normal", thick: false, small: false, tight: false },
    "Download":              { category: "normal", thick: false, small: false, tight: false },
    "Exclamation":           { category: "normal", thick: false, small: false, tight: false },
    "External Link":         { category: "normal", thick: false, small: false, tight: false },
    "Flip Backward":         { category: "normal", thick: false, small: false, tight: false },
    "Full":                  { category: "normal", thick: false, small: false, tight: false },
    "Handle":                { category: "normal", thick: false, small: false, tight: false },
    "Handle Desktop":        { category: "normal", thick: false, small: false, tight: false },
    "History":               { category: "normal", thick: false, small: false, tight: false },
    "Hourglass":             { category: "normal", thick: false, small: false, tight: false },
    "Image":                 { category: "normal", thick: false, small: false, tight: false },
    "Inbox":                 { category: "normal", thick: false, small: false, tight: false },
    "Keyboard":              { category: "normal", thick: false, small: false, tight: false },
    "Link":                  { category: "normal", thick: false, small: false, tight: false },
    "List":                  { category: "normal", thick: false, small: false, tight: false },
    "List Category":         { category: "normal", thick: false, small: false, tight: false },
    "List Ordered":          { category: "normal", thick: false, small: false, tight: false },
    "Logo Apple":            { category: "normal", thick: false, small: false, tight: false },
    "Logo Brunch":           { category: "normal", thick: false, small: false, tight: false },
    "Logo Facebook":         { category: "normal", thick: false, small: false, tight: false },
    "Logo Google Play":      { category: "normal", thick: false, small: false, tight: false },
    "Logo Instagram":        { category: "normal", thick: false, small: false, tight: false },
    "Logo Kakao":            { category: "normal", thick: false, small: false, tight: false },
    "Logo LinkedIn":         { category: "normal", thick: false, small: false, tight: false },
    "Logo Microsoft":        { category: "normal", thick: false, small: false, tight: false },
    "Logo Naver Blog":       { category: "normal", thick: false, small: false, tight: false },
    "Logo X":                { category: "normal", thick: false, small: false, tight: false },
    "Logo YouTube":          { category: "normal", thick: false, small: false, tight: false },
    "Magic Wand":            { category: "normal", thick: false, small: false, tight: false },
    "Mail":                  { category: "normal", thick: false, small: false, tight: false },
    "Mail Open":             { category: "normal", thick: false, small: false, tight: false },
    "Medal":                 { category: "normal", thick: false, small: false, tight: false },
    "Moon":                  { category: "normal", thick: false, small: false, tight: false },
    "More Horizontal":       { category: "normal", thick: false, small: false, tight: false },
    "Pause":                 { category: "normal", thick: false, small: false, tight: false },
    "Play":                  { category: "normal", thick: false, small: false, tight: false },
    "Printer":               { category: "normal", thick: false, small: false, tight: false },
    "Question":              { category: "normal", thick: false, small: false, tight: false },
    "Quote":                 { category: "normal", thick: false, small: false, tight: false },
    "Refresh":               { category: "normal", thick: false, small: false, tight: false },
    "Reset":                 { category: "normal", thick: false, small: false, tight: false },
    "Setting":               { category: "normal", thick: false, small: false, tight: false },
    "Share":                 { category: "normal", thick: false, small: false, tight: false },
    "Share iOS":             { category: "normal", thick: false, small: false, tight: false },
    "Sparkle":               { category: "normal", thick: false, small: false, tight: false },
    "Square Caret":          { category: "normal", thick: false, small: false, tight: false },
    "Square Check":          { category: "normal", thick: false, small: false, tight: false },
    "Square Han":            { category: "normal", thick: false, small: false, tight: false },
    "Square Hangul":         { category: "normal", thick: false, small: false, tight: false },
    "Square Kana":           { category: "normal", thick: false, small: false, tight: false },
    "Square More":           { category: "normal", thick: false, small: false, tight: false },
    "Strikethrough":         { category: "normal", thick: false, small: false, tight: false },
    "Sun":                   { category: "normal", thick: false, small: false, tight: false },
    "Tag":                   { category: "normal", thick: false, small: false, tight: false },
    "Text Format":           { category: "normal", thick: false, small: false, tight: false },
    "Text Variable":         { category: "normal", thick: false, small: false, tight: false },
    "Thumbnail":             { category: "normal", thick: false, small: false, tight: false },
    "Trash":                 { category: "normal", thick: false, small: false, tight: false },
    "Tune":                  { category: "normal", thick: false, small: false, tight: false },
    "Underline":             { category: "normal", thick: false, small: false, tight: false },
    "Upload":                { category: "normal", thick: false, small: false, tight: false },
    "Write":                 { category: "normal", thick: false, small: false, tight: false },
    "Login":                 { category: "normal", thick: false, small: false, tight: false },
    "Logout":                { category: "normal", thick: false, small: false, tight: false },
    "Video":                 { category: "normal", thick: false, small: false, tight: false },
    "Presentation":          { category: "normal", thick: false, small: false, tight: false },
    "Instance":              { category: "normal", thick: false, small: false, tight: false },
    "Music Microphone":      { category: "normal", thick: false, small: false, tight: false },
    "Calendar Person":       { category: "normal", thick: false, small: false, tight: false },
    "Webinar":               { category: "normal", thick: false, small: false, tight: false },
    "Square Play":           { category: "normal", thick: false, small: false, tight: false },
    "Document Search":       { category: "normal", thick: false, small: false, tight: false },
    "Left Side":             { category: "normal", thick: false, small: false, tight: false },
    "Deep Search":           { category: "normal", thick: false, small: false, tight: false },
    "Ai Review":             { category: "normal", thick: false, small: false, tight: false },
    "Agent Search":          { category: "normal", thick: false, small: false, tight: false },
    "Storage":               { category: "normal", thick: false, small: false, tight: false },
    "Agent":                 { category: "normal", thick: false, small: false, tight: false },
    "Whole Word":            { category: "normal", thick: false, small: false, tight: false },
    "Regex":                 { category: "normal", thick: false, small: false, tight: false },
    "Replace":               { category: "normal", thick: false, small: false, tight: false },
    "Replace All":           { category: "normal", thick: false, small: false, tight: false },
    "Telescope":             { category: "normal", thick: false, small: false, tight: false },

    // ── normal / thick 지원 ──────────────────────────────────────────────────
    "Arrow Left":            { category: "normal", thick: true, small: false, tight: false },
    "Arrow Right":           { category: "normal", thick: true, small: false, tight: false },
    "Arrow Down":            { category: "normal", thick: true, small: false, tight: false },
    "Arrow Up":              { category: "normal", thick: true, small: false, tight: false },
    "Arrow Up Right":        { category: "normal", thick: true, small: false, tight: false },
    "Bell":                  { category: "normal", thick: true, small: false, tight: false },
    "Book":                  { category: "normal", thick: true, small: false, tight: false },
    "Bookmark":              { category: "normal", thick: true, small: false, tight: false },
    "Bubble":                { category: "normal", thick: true, small: false, tight: false },
    "Bubble Plus":           { category: "normal", thick: true, small: false, tight: false },
    "Business Bag":          { category: "normal", thick: true, small: false, tight: false },
    "Camera":                { category: "normal", thick: true, small: false, tight: false },
    "Check":                 { category: "normal", thick: true, small: false, tight: false },
    "Circle":                { category: "normal", thick: true, small: false, tight: false },
    "Circle Check":          { category: "normal", thick: true, small: false, tight: false },
    "Circle Close":          { category: "normal", thick: true, small: false, tight: false },
    "Circle Exclamation":    { category: "normal", thick: true, small: false, tight: false },
    "Circle Info":           { category: "normal", thick: true, small: false, tight: false },
    "Circle Plus":           { category: "normal", thick: true, small: false, tight: false },
    "Circle Question":       { category: "normal", thick: true, small: false, tight: false },
    "Circle Up Right":       { category: "normal", thick: true, small: false, tight: false },
    "Clock":                 { category: "normal", thick: true, small: false, tight: false },
    "Close":                 { category: "normal", thick: true, small: false, tight: false },
    "Coffee":                { category: "normal", thick: true, small: false, tight: false },
    "Coins":                 { category: "normal", thick: true, small: false, tight: false },
    "Company":               { category: "normal", thick: true, small: false, tight: false },
    "Company Check":         { category: "normal", thick: true, small: false, tight: false },
    "Company Plus":          { category: "normal", thick: true, small: false, tight: false },
    "Compass":               { category: "normal", thick: true, small: false, tight: false },
    "Crown":                 { category: "normal", thick: true, small: false, tight: false },
    "Desktop":               { category: "normal", thick: true, small: false, tight: false },
    "Diamond":               { category: "normal", thick: true, small: false, tight: false },
    "Dislike":               { category: "normal", thick: true, small: false, tight: false },
    "Document":              { category: "normal", thick: true, small: false, tight: false },
    "Document Person":       { category: "normal", thick: true, small: false, tight: false },
    "Document Text":         { category: "normal", thick: true, small: false, tight: false },
    "Eye":                   { category: "normal", thick: true, small: false, tight: false },
    "Eye Slash":             { category: "normal", thick: true, small: false, tight: false },
    "Face Smile":            { category: "normal", thick: true, small: false, tight: false },
    "Filter":                { category: "normal", thick: true, small: false, tight: false },
    "Fire":                  { category: "normal", thick: true, small: false, tight: false },
    "Folder":                { category: "normal", thick: true, small: false, tight: false },
    "Folder Job":            { category: "normal", thick: true, small: false, tight: false },
    "Folder Star":           { category: "normal", thick: true, small: false, tight: false },
    "Graduation":            { category: "normal", thick: true, small: false, tight: false },
    "Heart":                 { category: "normal", thick: true, small: false, tight: false },
    "Heart in Heart":        { category: "normal", thick: true, small: false, tight: false },
    "Home":                  { category: "normal", thick: true, small: false, tight: false },
    "Like":                  { category: "normal", thick: true, small: false, tight: false },
    "Line Horizontal":       { category: "normal", thick: true, small: false, tight: false },
    "Location":              { category: "normal", thick: true, small: false, tight: false },
    "Lock":                  { category: "normal", thick: true, small: false, tight: false },
    "Lock Open":             { category: "normal", thick: true, small: false, tight: false },
    "Megaphone":             { category: "normal", thick: true, small: false, tight: false },
    "Menu":                  { category: "normal", thick: true, small: false, tight: false },
    "Message":               { category: "normal", thick: true, small: false, tight: false },
    "Microphone":            { category: "normal", thick: true, small: false, tight: false },
    "Microphone Slash":      { category: "normal", thick: true, small: false, tight: false },
    "Minus":                 { category: "normal", thick: true, small: false, tight: false },
    "Mobile":                { category: "normal", thick: true, small: false, tight: false },
    "More Vertical":         { category: "normal", thick: true, small: false, tight: false },
    "Pencil":                { category: "normal", thick: true, small: false, tight: false },
    "Person":                { category: "normal", thick: true, small: false, tight: false },
    "Person Plus":           { category: "normal", thick: true, small: false, tight: false },
    "Persons":               { category: "normal", thick: true, small: false, tight: false },
    "Phone":                 { category: "normal", thick: true, small: false, tight: false },
    "Pin":                   { category: "normal", thick: true, small: false, tight: false },
    "Plus":                  { category: "normal", thick: true, small: false, tight: false },
    "Search":                { category: "normal", thick: true, small: false, tight: false },
    "Send":                  { category: "normal", thick: true, small: false, tight: false },
    "Square":                { category: "normal", thick: true, small: false, tight: false },
    "Square Plus":           { category: "normal", thick: true, small: false, tight: false },
    "Star":                  { category: "normal", thick: true, small: false, tight: false },
    "Template":              { category: "normal", thick: true, small: false, tight: false },
    "Thunder":               { category: "normal", thick: true, small: false, tight: false },
    "Triangle":              { category: "normal", thick: true, small: false, tight: false },
    "Triangle Exclamation":  { category: "normal", thick: true, small: false, tight: false },
    "Trophy":                { category: "normal", thick: true, small: false, tight: false },
    "Umbrella":              { category: "normal", thick: true, small: false, tight: false },
    "Verified Check":        { category: "normal", thick: true, small: false, tight: false },
    "Verified Star":         { category: "normal", thick: true, small: false, tight: false },
    "Component":             { category: "normal", thick: true, small: false, tight: false },
    "Ticket":                { category: "normal", thick: true, small: false, tight: false },
    "Flag":                  { category: "normal", thick: true, small: false, tight: false },
    "Globe":                 { category: "normal", thick: true, small: false, tight: false },
    "Palette":               { category: "normal", thick: true, small: false, tight: false },
    "Utility":               { category: "normal", thick: true, small: false, tight: false },
    "Square Latin":          { category: "normal", thick: true, small: false, tight: false },
    "Passport":              { category: "normal", thick: true, small: false, tight: false },
    "Zep Fast":              { category: "normal", thick: true, small: false, tight: false },

    // ── normal / thick + small 지원 ──────────────────────────────────────────
    "Chevron Double Left":   { category: "normal", thick: true, small: true, tight: false },
    "Chevron Double Right":  { category: "normal", thick: true, small: true, tight: false },
    "Chevron Down":          { category: "normal", thick: true, small: true, tight: false },
    "Chevron Up":            { category: "normal", thick: true, small: true, tight: false },

    // ── normal / thick + small + tight 지원 (tight 시 12×24px) ───────────────
    "Chevron Left":          { category: "normal", thick: true, small: true, tight: true },
    "Chevron Right":         { category: "normal", thick: true, small: true, tight: true },

    // ── color — 고정색 브랜드/SNS 아이콘 ────────────────────────────────────
    "Logo Google":           { category: "color", thick: false, small: false, tight: false },
    "Logo Apple (Color)":    { category: "color", thick: false, small: false, tight: false },
    "Logo Facebook (Color)": { category: "color", thick: false, small: false, tight: false },
    "Logo Google Play (Color)": { category: "color", thick: false, small: false, tight: false },
    "Logo Instagram (Color)":{ category: "color", thick: false, small: false, tight: false },
    "Logo Kakao (Color)":    { category: "color", thick: false, small: false, tight: false },
    "Logo LinkedIn (Color)": { category: "color", thick: false, small: false, tight: false },
    "Logo Naver Blog (Color)":{ category: "color", thick: false, small: false, tight: false },
    "Logo YouTube (Color)":  { category: "color", thick: false, small: false, tight: false },

    // ── navigation — 탭바 아이콘 ────────────────────────────────────────────
    "Career":                { category: "navigation", thick: false, small: false, tight: false },
    "Recruit":               { category: "navigation", thick: false, small: false, tight: false },
    "Social":                { category: "navigation", thick: false, small: false, tight: false },
    "My Page":               { category: "navigation", thick: false, small: false, tight: false },
    "Menu (Navigation)":     { category: "navigation", thick: false, small: false, tight: false },
  },
};

// -----------------------------------------------------------------------------
// 9. Divider
// variant: "Normal"(1px) | "Thick"(12px)
// vertical: false → 가로 / true → 세로
// -----------------------------------------------------------------------------
export const divider = {
  thin:     1,   // variant=Normal
  thick:    12,  // variant=Thick
  variants: ["Normal", "Thick"],
  vertical: [false, true],
};

// -----------------------------------------------------------------------------
// 10. Action — Button / Chip / Toggle Icon / Action Area
//
// 각 컴포넌트 구조:
//   props  — Figma 컴포넌트에서 읽어온 유효한 prop 값 목록
//   size   — prop 조합별 실제 렌더 사이즈 (px)
//
// 사용 예:
//   const h = button.size.Large.height          // → 48
//   const s = buttonIcon.outlined.size.Medium   // → 40
//   const valid = chip.props.variant            // → ["Outlined", "Solid"]
// -----------------------------------------------------------------------------

/** Button/Button */
export const button = {
  props: {
    variant:  ["Solid", "Outlined"],
    color:    ["Primary", "Assistive"],
    size:     ["Large", "Medium", "Small"],
    iconOnly: [false, true],
    disable:  [false, true],
  },
  size: {
    Large:  { height: 48, iconOnlySize: 48 },
    Medium: { height: 40, iconOnlySize: 40 },
    Small:  { height: 32, iconOnlySize: 32 },
  },
};

/** Button/Text */
export const buttonText = {
  props: {
    color:   ["Primary", "Assistive"],
    size:    ["Medium", "Small"],
    disable: [false, true],
  },
  size: {
    Medium: { height: 32 },
    Small:  { height: 28 },
  },
};

/** Button/Icon (4종) */
export const buttonIcon = {
  // 기본 아이콘 버튼 — 배경 없음
  normal: {
    props:  { disable: [false, true] },
    size:   24,
  },
  // 배경 있는 아이콘 버튼
  background: {
    props:  { alternative: [false, true], disable: [false, true] },
    size:   24,
  },
  // 테두리 아이콘 버튼
  outlined: {
    props:  { size: ["Medium", "Small", "Custom"], disable: [false, true] },
    size:   { Medium: 40, Small: 32, Custom: 28 },
  },
  // 채워진 아이콘 버튼 (Outlined와 동일 사이즈)
  solid: {
    props:  { size: ["Medium", "Small", "Custom"], disable: [false, true] },
    size:   { Medium: 40, Small: 32, Custom: 28 },
  },
};

/** Chip/Chip */
export const chip = {
  props: {
    variant: ["Outlined", "Solid"],
    size:    ["Large", "Medium", "Small", "XSmall"],
    active:  [false, true],
    disable: [false, true],
  },
  size: {
    Large:  { width: 68, height: 40 },
    Medium: { width: 66, height: 36 },
    Small:  { width: 57, height: 32 },
    XSmall: { width: 48, height: 24 },
  },
};

/** Control/Toggle Icon */
export const toggleIcon = {
  props:  { active: [false, true] },
  size:   24,
};

/** Action Area */
export const actionArea = {
  props: {
    variant: [
      "Strong", "Neutral", "Compact", "Cancel",
      "Custom", "Summary", "Information",
      "Checkbox", "Chip", "Button",
    ],
    extra: [false, true],
  },
  size: {
    default:   { width: 375, height: 102 },  // extra=false
    withExtra: { width: 375, height: 198 },  // extra=true
  },
};

// =============================================================================
// 11. Selection and Input
// =============================================================================

/** Textinput/Textfield */
export const textfield = {
  props: {
    status:         ["Normal", "Positive", "Negative"],
    active:         [false, true],
    focus:          [false, true],
    disable:        [false, true],
    trailingButton: [false, true],
  },
  size: { width: 335, height: 100 },
  // trailing content 리소스 타입별 사이즈
  trailing: {
    Normal:     { width: 80,  height: 48 },
    Assistive:  { width: 80,  height: 48 },
    Custom:     { width: 24,  height: 24 },
    Icon:       { width: 24,  height: 24 },
    IconButton: { width: 24,  height: 24 },
    Text:       { width: 36,  height: 24 },
    Timer:      { width: 40,  height: 24 },
    Badge:      { width: 44,  height: 24 },
    Button:     { width: 50,  height: 24 },
  },
};

/** Textinput/Textarea */
export const textarea = {
  props: {
    status:  ["Normal", "Negative"],
    resize:  ["Normal", "Limit", "Fixed"],
    active:  [false, true],
    focus:   [false, true],
    disable: [false, true],
  },
  size: {
    Normal: { width: 335, height: 138 },  // resize=Normal|Limit 공통
    Limit:  { width: 335, height: 138 },
    Fixed:  { width: 335, height: 190 },
  },
  // trailing content 리소스 타입별 사이즈
  trailing: {
    CharacterCounter:  { width: 55, height: 18 },
    Button:            { width: 50, height: 24 },
    NormalIconButton:  { width: 24, height: 24 },
    PrimaryIconButton: { width: 32, height: 32 },
  },
};

/** Select/Select */
export const select = {
  props: {
    render:   ["Text", "Chip"],
    negative: [false, true],
    active:   [false, true],
    focus:    [false, true],
    disable:  [false, true],
    overflow: [false, true],
  },
  size: { width: 335, height: 76 },
};

/** Control/Checkbox */
export const checkbox = {
  props: {
    size:    ["Medium", "Small"],
    state:   ["Unchecked", "Checked", "Indeterminate"],
    tight:   [false, true],
    bold:    [false, true],
    disable: [false, true],
  },
  size: {
    Medium: { width: 335, height: 24 },
    Small:  { width: 335, height: 20 },
  },
};

/** Control/Radio */
export const radio = {
  props: {
    size:    ["Normal", "Small"],
    state:   ["Unchecked", "Checked", "Indeterminate"],
    tight:   [false, true],
    disable: [false, true],
  },
  // tight=false: 정사각형 / tight=true: 좁은 폭
  size: {
    Normal: {
      default: { width: 24, height: 24 },
      tight:   { width: 20, height: 24 },
    },
    Small: {
      default: { width: 20, height: 20 },
      tight:   { width: 16, height: 20 },
    },
  },
};

/** Control/Check Mark */
export const checkMark = {
  props: {
    size:    ["Medium"],
    state:   ["Unchecked", "Checked"],
    tight:   [false, true],
    disable: [false, true],
  },
  size: { width: 335, height: 24 },
};

/** Switch/Switch */
export const switchControl = {
  props: {
    platform: ["Normal", "iOS"],
    size:     ["Medium", "Small"],
    active:   [false, true],
    disable:  [false, true],
  },
  size: {
    Medium: { width: 52, height: 32 },
    Small:  { width: 39, height: 24 },
  },
};

/** Segmented Control/Segmented Control */
export const segmentedControl = {
  props: {
    size:    ["Medium", "Small"],
    active:  [false, true],
    disable: [false, true],
  },
  size: {
    Medium: { width: 52, height: 32 },
    Small:  { width: 39, height: 24 },
  },
};

/** Framed Style/Framed Style */
export const framedStyle = {
  props: {
    variant:  ["Solid", "Outlined"],
    size:     ["Large", "Medium", "Small"],
    icon:     [false, true],
    selected: [false, true],
    disabled: [false, true],
    status:   ["Normal", "Negative"],
  },
  size: {
    Large:  { width: 335, height: 48 },
    Medium: { width: 335, height: 40 },
    Small:  { width: 335, height: 32 },
  },
  // 내부 슬롯 타입별 사이즈
  slot: {
    Custom:   { width: 280, height: 64 },
    Checkbox: { width: 280, height: 70 },
    Radio:    { width: 280, height: 48 },
  },
  // selected 상태 표시 사이즈
  selectedSize: { width: 367, height: 72 },
};

// =============================================================================
// 12. Content
// =============================================================================

/** Icons/Icons — 콘텐츠용 반응형 사이즈 (Figma: Size prop 기반) */
export const contentIcon = {
  props: {
    size: ["XLarge", "Large", "Medium", "Small", "XSmall"],
  },
  size: {
    XLarge: 24,
    Large:  32,
    Medium: 28,
    Small:  20,
    XSmall: 16,
  },
};

/** Content Badge/Content Badge */
export const contentBadge = {
  props: {
    variant: ["Solid", "Outlined"],
    size:    ["XSmall", "Small", "Medium"],
    color:   ["Neutral", "Accent"],
  },
  size: {
    XSmall: { width: 42, height: 20 },
    Small:  { width: 44, height: 24 },
    Medium: { width: 51, height: 28 },
  },
};

/** Thumbnail/Thumbnail */
export const thumbnail = {
  props: {
    radius: [false, true],
  },
  size: { width: 240, height: 240 },
  // 오버레이 커스텀 리소스도 동일 사이즈
  overlay: { width: 240, height: 240 },
};

/** Avatar/Avatar */
export const avatar = {
  props: {
    variant:     ["Person", "Company", "Academy"],
    size:        ["XSmall", "Small", "Medium", "Large", "XLarge"],
    placeholder: [false, true],
  },
  size: {
    XSmall: 24,
    Small:  32,
    Medium: 40,
    Large:  48,
    XLarge: 56,
  },
  // 뱃지 오버레이 (Figma: 💎 Variant prop 기반)
  badge: {
    props:    { variant: ["Default", "Official", "Deactivate", "원티드"] },
    size:     24,
  },
};

/** Avatar/Avatar Group */
export const avatarGroup = {
  props: {
    variant: ["Person", "Company", "Academy"],
    size:    ["XSmall", "Small"],
  },
  size: {
    XSmall: { width: 96,  height: 24 },
    Small:  { width: 128, height: 32 },
  },
  // trailing TextButton 리소스
  trailing: { width: 38, height: 28 },
};

/** List Cell/List Cell */
export const listCell = {
  props: {
    verticalPadding: ["None", "Small", "Medium", "Large"],
    verticalAlign:   ["Top", "Center"],
    fillWidth:       [false, true],
    textEllipsis:    [false, true],
    selected:        [false, true],
    disable:         [false, true],
  },
  // height는 verticalPadding에 의해 결정
  // width는 fillWidth에 의해 결정
  size: {
    None:   { height: 24, widthDefault: 335, widthFill: 375 },
    Small:  { height: 40, widthDefault: 335, widthFill: 375 },
    Medium: { height: 48, widthDefault: 335, widthFill: 375 },
    Large:  { height: 56, widthDefault: 335, widthFill: 375 },
  },
};

/** Card/Card */
export const card = {
  props: {
    platform: ["Desktop", "Mobile"],
    skeleton: [false, true],
    save:     [false, true],
  },
  size: {
    Desktop: { width: 240, height: 214 },
    Mobile:  { width: 152, height: 164 },
  },
  // 리소스 사이즈
  resource: {
    topContent: { width: 152, height: 20 },  // Normal/Top Content/Custom
    save:       { size: 24 },                 // Save 버튼
  },
};

/** Card/List Card */
export const cardList = {
  props: {
    save: [false, true],
  },
  // 리소스 사이즈
  resource: {
    leadingContent:  { size: 24 },  // List/Leading Content/Custom
    trailingContent: { size: 24 },  // List/Trailing Content/Custom
  },
};

// -----------------------------------------------------------------------------
// 13. Loading
// -----------------------------------------------------------------------------

/**
 * Circular loaders
 *   Wanted  — brand loader (Figma: Circular/Wanted), 32×32px
 *   Circular — general loader (Figma: Circular/Circular), 28×28px
 */
export const loadingCircular = {
  wanted: {
    props: { animate: [false, true] },
    size: 32,
  },
  circular: {
    props: { animate: [false, true] },
    size: 28,
  },
};

/**
 * Skeleton screens
 *   text      — Skeleton/Text,      120×22px
 *   rectangle — Skeleton/Rectangle,  64×64px
 *   circle    — Skeleton/Circle,     64×64px
 */
export const skeleton = {
  text: {
    props: {
      color:  ["Normal", "White"],
      length: ["100%", "75%", "50%", "25%"],
      align:  ["Leading", "Center", "Trailing"],
    },
    size: { width: 120, height: 22 },
  },
  rectangle: {
    props: { color: ["Normal", "White"] },
    size: 64,
  },
  circle: {
    props: { color: ["Normal", "White"] },
    size: 64,
  },
};

// -----------------------------------------------------------------------------
// 14. Navigation
// -----------------------------------------------------------------------------

/**
 * Tab bar
 *   Figma: Tab/Tab
 *   resize — Hug | Fill
 *   size   — Small(40px) | Medium(48px) | Large(56px)
 *   horizontalPadding — false(335px) | true(375px)
 */
export const tab = {
  props: {
    resize:             ["Hug", "Fill"],
    size:               ["Small", "Medium", "Large"],
    horizontalPadding:  [false, true],
    trailingIconButton: [false, true],
    scroll:             [false, true],
  },
  size: {
    Small:  { height: 40, widthDefault: 335, widthPadding: 375 },
    Medium: { height: 48, widthDefault: 335, widthPadding: 375 },
    Large:  { height: 56, widthDefault: 335, widthPadding: 375 },
  },
};

/**
 * Tab resource item (individual tab cell)
 *   Figma: Tab/Resource/Tab
 */
export const tabResource = {
  props: {
    active:   [false, true],
    disabled: [false, true],
  },
};

/**
 * Category bar
 *   Figma: Category/Category
 *   variant — Normal | Alternative
 *   size    — Small(24px) | Medium(32px) | Large(36px) | XLarge(40px)
 */
export const category = {
  props: {
    variant:          ["Normal", "Alternative"],
    size:             ["Small", "Medium", "Large", "XLarge"],
    horizontalPadding:[false, true],
    verticalPadding:  [false, true],
    scroll:           [false, true],
  },
  size: {
    Small:  { height: 24, widthDefault: 335, widthPadding: 375 },
    Medium: { height: 32, widthDefault: 335, widthPadding: 375 },
    Large:  { height: 36, widthDefault: 335, widthPadding: 375 },
    XLarge: { height: 40, widthDefault: 335, widthPadding: 375 },
  },
};

/**
 * Category resource chip
 *   Figma: Category/Resource/Chip/{Normal|Alternative}/{XSmall|Small|Normal|Large}
 */
export const categoryChip = {
  props: {
    variant:  ["Normal", "Alternative"],
    chipSize: ["XSmall", "Small", "Normal", "Large"],
    active:   [false, true],
  },
};

/**
 * Page Indicator (Counter)
 *   Figma: Page Indicator/Counter
 *   size        — Small(52×26) | Medium(62×34)
 *   alternative — false | true
 */
export const pageIndicator = {
  props: {
    size:        ["Small", "Medium"],
    alternative: [false, true],
  },
  size: {
    Small:  { width: 52, height: 26 },
    Medium: { width: 62, height: 34 },
  },
};

/**
 * Pagination — Dots
 *   Figma: Pagination/Dots
 *   variant — Normal | White
 *   size    — Small(48×6) | Medium(84×10)
 */
export const paginationDots = {
  props: {
    variant: ["Normal", "White"],
    size:    ["Small", "Medium"],
  },
  size: {
    Small:  { width: 48,  height: 6  },
    Medium: { width: 84,  height: 10 },
  },
};

/**
 * Pagination — Navigation
 *   Figma: Pagination/Navigation
 *   variant — Extended(760×32) | Compact(335×32) | Minimize(66×18)
 */
export const paginationNav = {
  props: {
    variant:         ["Extended", "Compact", "Minimize"],
    leadingContent:  [false, true],
    trailingContent: [false, true],
  },
  size: {
    Extended: { width: 760, height: 32 },
    Compact:  { width: 335, height: 32 },
    Minimize: { width: 66,  height: 18 },
  },
};

// -----------------------------------------------------------------------------
// 15. Feedback
// -----------------------------------------------------------------------------

/**
 * Toast
 *   Figma: Toast/Toast
 *   variant — Normal | Positive | Cautionary | Negative
 *   All variants: 335×54px
 */
export const toast = {
  props: {
    variant:     ["Normal", "Positive", "Cautionary", "Negative"],
    leadingIcon: [false, true],
    customize:   [false, true],
  },
  size: { width: 335, height: 54 },
};

/**
 * Snackbar
 *   Figma: Snackbar/Snackbar
 *   335×54px
 */
export const snackbar = {
  props: {
    heading:     [false, true],
    description: [false, true],
    icon:        [false, true],
    closeButton: [false, true],
  },
  size: { width: 335, height: 54 },
};

/**
 * Alert
 *   Figma: Alert/Alert
 *   platform — iOS(375×812) | Android(360×800) | Web(375×635)
 */
export const alert = {
  props: {
    platform: ["iOS", "Android", "Web"],
    heading:  [false, true],
  },
  size: {
    iOS:     { width: 375, height: 812 },
    Android: { width: 360, height: 800 },
    Web:     { width: 375, height: 635 },
  },
};

/**
 * Alert — Action button
 *   Figma: Alert/Resource/Action
 *   variant — Normal | Assistive | Negative
 *   60×32px
 */
export const alertAction = {
  props: {
    variant: ["Normal", "Assistive", "Negative"],
  },
  size: { width: 60, height: 32 },
};

// -----------------------------------------------------------------------------
// 16. Presentation
// -----------------------------------------------------------------------------

/**
 * Tooltip
 *   Figma: Tooltip/Tooltip
 *   size     — Small | Medium
 *   position — Bottom | Top | Left | Right
 *   arrowAlign:
 *     vertical positions (Bottom/Top) → Left | Center | Right
 *     horizontal positions (Left/Right) → Top | Center | Bottom
 *
 *   Dimensions by size × position axis:
 *     Medium + Bottom/Top  → 171 × 44
 *     Medium + Left/Right  → 179 × 36
 *     Small  + Bottom/Top  →  36 × 30
 *     Small  + Left/Right  →  42 × 24
 */
export const tooltip = {
  props: {
    size:       ["Small", "Medium"],
    position:   ["Bottom", "Top", "Left", "Right"],
    arrowAlign: ["Left", "Center", "Right", "Top", "Bottom"],
  },
  size: {
    Medium: {
      "Bottom|Top": { width: 171, height: 44 },
      "Left|Right": { width: 179, height: 36 },
    },
    Small: {
      "Bottom|Top": { width: 36,  height: 30 },
      "Left|Right": { width: 42,  height: 24 },
    },
  },
};

/**
 * Tooltip arrow resource
 *   Figma: Tooltip/Resource/{Medium|Small}/Arrow
 *   Arrow dimensions by size × position:
 *     Medium Bottom/Top → 20 × 8  | Medium Left/Right → 8 × 20
 *     Small  Bottom/Top → 14 × 6  | Small  Left/Right → 6 × 14
 */
export const tooltipArrow = {
  props: {
    size:     ["Small", "Medium"],
    position: ["Bottom", "Top", "Left", "Right"],
  },
  size: {
    Medium: {
      "Bottom|Top": { width: 20, height: 8  },
      "Left|Right": { width: 8,  height: 20 },
    },
    Small: {
      "Bottom|Top": { width: 14, height: 6  },
      "Left|Right": { width: 6,  height: 14 },
    },
  },
};

/**
 * Menu
 *   Figma: Menu/Menu
 *   variant     — Normal | Radio | Checkbox
 *   cellPadding — "8px" | "12px"
 *   All variants: 320 × 416px
 */
export const menu = {
  props: {
    variant:     ["Normal", "Radio", "Checkbox"],
    cellPadding: ["8px", "12px"],
  },
  size: { width: 320, height: 416 },
};

/**
 * Menu item cell
 *   Figma: Menu/Resource/Item/Cell
 *   variant         — Normal | Checkbox | Radio
 *   verticalPadding — "8px" | "12px"
 *   active          — false | true
 *   caption         — false | true
 *   disable         — false | true
 *
 *   Height: padding "12px" + caption false → 48 | caption true → 70
 *           padding  "8px" + caption false → 40 | caption true → 62
 */
export const menuItem = {
  props: {
    variant:         ["Normal", "Checkbox", "Radio"],
    verticalPadding: ["8px", "12px"],
    active:          [false, true],
    caption:         [false, true],
    disable:         [false, true],
  },
  size: {
    width: 280,
    height: {
      "12px": { captionFalse: 48, captionTrue: 70 },
      "8px":  { captionFalse: 40, captionTrue: 62 },
    },
  },
};

const tokens = {
  colorPrimitive,
  colorSemantic,
  shadow,
  fontFamily,
  typography,
  breakpoint,
  spacing,
  grid,
  icon,
  divider,
  button,
  buttonText,
  buttonIcon,
  chip,
  toggleIcon,
  actionArea,
  textfield,
  textarea,
  select,
  checkbox,
  radio,
  checkMark,
  switchControl,
  segmentedControl,
  framedStyle,
  // ── 12. Content ──────────────────────────────────────────────────────────
  contentIcon,
  contentBadge,
  thumbnail,
  avatar,
  avatarGroup,
  listCell,
  card,
  cardList,
  // ── 13. Loading ──────────────────────────────────────────────────────────
  loadingCircular,
  skeleton,
  // ── 14. Navigation ───────────────────────────────────────────────────────
  tab,
  tabResource,
  category,
  categoryChip,
  pageIndicator,
  paginationDots,
  paginationNav,
  // ── 15. Feedback ─────────────────────────────────────────────────────────
  toast,
  snackbar,
  alert,
  alertAction,
  // ── 16. Presentation ─────────────────────────────────────────────────────
  tooltip,
  tooltipArrow,
  menu,
  menuItem,
};

export default tokens;
