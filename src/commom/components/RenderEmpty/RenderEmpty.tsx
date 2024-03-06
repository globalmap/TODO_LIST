import { SmileOutlined } from "@ant-design/icons"

export const customizeRenderEmpty = (): JSX.Element => 
  <div style={{ textAlign: "center" }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Tasks Not Found</p>
  </div>

