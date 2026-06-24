import CDTBlueprint from './CDTBlueprint'
import PaymentsArchitecture from './PaymentsArchitecture'
import DesignSystemMap from './DesignSystemMap'
import { artifactThemes } from './themes'

const BY_INDEX = {
  '01': CDTBlueprint,
  '02': PaymentsArchitecture,
  '03': DesignSystemMap,
}

// Renders the right visual-proof artifact for a given featured project,
// themed for the active art direction.
export default function Artifact({ index, variant = 'systems' }) {
  const Component = BY_INDEX[index] || CDTBlueprint
  const theme = artifactThemes[variant] || artifactThemes.systems
  return <Component theme={theme} />
}

export { artifactThemes }
