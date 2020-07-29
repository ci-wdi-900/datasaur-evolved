const {
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
} = require('./main.js')

const dinos = require('./dinos.js');

let originalDinos = [];

beforeEach(() => {
  originalDinos = [
    {
      species: 'Archaeopteryx',
      period: 'Jurassic',
      carnivore: true,
      extinct: false
    },
    {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    },
    {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    },
    {
      species: 'Herrerasaurus',
      period: 'Triassic',
      carnivore: false,
      extinct: false
    },
    {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Styracosaurus',
      period: 'Cretaceous',
      carnivore: false,
      extinct: true
    },
  ]
})


describe('singularizeDinos',() => {
  it(`returns an array of all dinos where the dinos have had their names made singular`, () => {
    const singularDinos = [
      {
        species: 'Archaeopteryx',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Brachiosaur',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'Herrerasaur',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styracosaur',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(singularizeDinos(dinos)).toEqual(singularDinos);
  })

  it(`doesn't mutate the original array`, () => {
    singularizeDinos(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('truncateDinos',() => {
  it(`returns an array of all dinos where the dinos have had their names truncated`, () => {
    const truncatedDinos = [
      {
        species: 'Archaeo...',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Brachio...',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'Herrera...',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styraco...',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(truncateDinos(dinos)).toEqual(truncatedDinos);
  })

  it(`doesn't mutate the original array`, () => {
    truncateDinos(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('makeAllExtinct',() => {
  it(`returns an array of all dinos where the dinos have all been made extinct`, () => {
    const extinctDinos = [
    {
      species: 'Archaeopteryx',
      period: 'Jurassic',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    },
    {
      species: 'Herrerasaurus',
      period: 'Triassic',
      carnivore: false,
      extinct: true
    },
    {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Styracosaurus',
      period: 'Cretaceous',
      carnivore: false,
      extinct: true
    },
  ]

    expect(makeAllExtinct(dinos)).toEqual(extinctDinos);
  })

  it(`doesn't mutate the original array`, () => {
    makeAllExtinct(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('carnivoresOnly',() => {
  it(`returns an array of only the carnivorous `, () => {
    const carnivores = [
  {
    species: 'Archaeopteryx',
    period: 'Jurassic',
    carnivore: true,
    extinct: false
  },
  {
    species: 'Eoraptor',
    period: 'Triassic',
    carnivore: true,
    extinct: false
  },
  {
    species: 'T-Rex',
    period: 'Cretaceous',
    carnivore: true,
    extinct: true
  },
]

    expect(carnivoresOnly(dinos)).toEqual(carnivores);
  })

  it(`doesn't mutate the original array`, () => {
    carnivoresOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('herbivoresOnly',() => {
  it(`returns an array of only the herbivorous`, () => {
    const herbivores = [
      {
        species: 'Brachiosaurus',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'Herrerasaurus',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
      {
        species: 'Styracosaurus',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(herbivoresOnly(dinos)).toEqual(herbivores);
  })

  it(`doesn't mutate the original array`, () => {
    herbivoresOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('extinctOnly',() => {
  it(`returns an array of only extinct dinosaurs`, () => {
    const extinct = [
      {
        species: 'Brachiosaurus',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styracosaurus',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(extinctOnly(dinos)).toEqual(extinct);
  })

  it(`doesn't mutate the original array`, () => {
    extinctOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('notExtinct',() => {
  it(`returns an array of only extinct dinosaurs`, () => {
    const stillAlive = [
      {
        species: 'Archaeopteryx',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Herrerasaurus',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
    ]

    expect(notExtinct(dinos)).toEqual(stillAlive);
  })

  it(`doesn't mutate the original array`, () => {
    notExtinct(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('triassicOnly',() => {
  it(`returns an array of only Triassic dinosaurs`, () => {
    const triassic = [
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Herrerasaurus',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
    ]

    expect(triassicOnly(dinos)).toEqual(triassic);
  })

  it(`doesn't mutate the original array`, () => {
    triassicOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('notTriassic',() => {
  it(`returns an array of only extinct dinosaurs`, () => {
    const jurassicOrCretaceous = [
      {
        species: 'Archaeopteryx',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Brachiosaurus',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styracosaurus',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(notTriassic(dinos)).toEqual(jurassicOrCretaceous);
  })

  it(`doesn't mutate the original array`, () => {
    notTriassic(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})
