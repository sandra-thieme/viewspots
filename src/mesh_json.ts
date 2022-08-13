import { Mesh, MeshNode, MeshElement, MeshValue } from './potato'

export const jsonToMesh = (json: string): Mesh => {
  const sanityCheck = process.env['SANITY_CHECK'] === 'true'
  const parsedJson = JSON.parse(json)
  return new Mesh(
    toMeshNodes(parsedJson.nodes),
    toMeshElements(parsedJson.elements),
    toMeshValues(parsedJson.values),
    sanityCheck
  )
}

const toMeshNodes = (nodes: any[]): MeshNode[] =>
  nodes.map((node)=> new MeshNode(node.id, node.x, node.y))

const toMeshElements = (elements: any[]): MeshElement[] =>
  elements.map((element)=> new MeshElement(element.id, element.nodes))

const toMeshValues = (values: any[]): MeshValue[] =>
  values.map((value)=> new MeshValue(value.element_id, value.value))