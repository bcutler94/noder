import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'noder',
  run: async (toolbox) => {

    const { 
      system: { run }, 
      print: { highlight, spin, warning, success, info }, 
      filesystem, 
      strings, 
      parameters: { array } 
    } = toolbox

    const fileName = array[0]

    highlight(`Using ${fileName} as node.js entry file.`)
    await run(`node ${fileName}`)

  },
}



module.exports = command
