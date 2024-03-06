import React from "react"
import { Typography } from "antd"

const { Title } = Typography

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => <Title>{title}</Title>

export default Header
