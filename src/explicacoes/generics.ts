function first(array) {
    return array[0]
  }
  

  //declarando generics
  function last<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
  }
  
  const pilots = ['Luke', 2, 'Wedge', 'Han', 'Lando']
  
  // Tipo any
  const firstPilot = first(pilots)
  
  // Tipo inferido
  const lastPilot = last(pilots)


  //=====================================================================


  interface Ship {
    name: string
    pilot: string
  }
  
  interface war extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }
  
  // Se deixássemos sem o tipo Ship desativaríamos
  // totalmente o typescript para esse argumento
    // poderiamos ter declarado dessa forma abaixo tb:
  // function cloneShip<ShipType extends { name: string, pilot: string}>(ship: ShipType
  function cloneShip <NaveTipo extends Ship>(ship: NaveTipo, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: war = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // A cópia funciona, porém a tipagem está incorreta
  // pois a ambas é atribuido o tipo Ship
  // para corrigirmos isso colocamos o generics na declaração da função "cloneShip"
  // <NaveTipo extends Ship> e passamos esse tipo "naveTipo" para o argumento "ship" da função
  // usamos o "extends" para dizer que esse tipo generics, vai ter obrigatoriamente
  // as propriedades da interface "Ship" criada lá em cima
  // poderiamos ter declarado dessa forma abaixo tb:
  // function cloneShip<ShipType extends { name: string, pilot: string}>(ship: ShipType
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')


    //=====================================================================


  // Outra coisa que pode ser necessária em alguns momentos é especificar manualmente 
  // o tipo para a função genérica. Imagine que no 
  // nosso caso não queremos que o VS Code infira automaticamente o mesmo tipo que passamos, 
  // ao invés disso queremos forçar um tipo diferente. Vejamos como podemos fazer isso:

  interface EnemyShip {
    name: string
    pilot: string
    flag?: string // A propriedade é opcional para evitar erros
  }
  
  // O tipo Ship não estaria correto aqui
  const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
  // Mas podemos explicitamente passar o tipo para a função
  // e agora temos o tipo EnemyShip atribuido corretamente
  const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')
  
  // Aqui temos um erro por conta do tipo Ship
  // enemyCopy.flag = 'Imperial'

  // Já aqui temos a propriedade opcional flag
  enemyCopy2.flag = 'Imperial'


  
    //=====================================================================



  // Segue a mesma implementação das funções
// e o mesmo valeria para as interfaces
class Pilot <ShipType> {
    name: string
    ship: ShipType
  
    constructor(name: string, ship: ShipType) {
      this.name = name
      this.ship = ship
    }
  }
  
  // Apesar de não ser necessário aqui, seria
  // possível explicitar o tipo da mesma forma
  const han = new Pilot('Han Solo', falcon)
  const luke = new Pilot<war>('Luke Skywalker', xWing)