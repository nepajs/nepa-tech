import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'

// Add prod features to test environment
import 'babel-polyfill'

// Required for enzyme to work with React 16
Enzyme.configure({ adapter: new Adapter() })

// Reduces the need to import these methods within our test files
global.toJson = toJson
global.renderer = renderer
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.mount = Enzyme.mount
