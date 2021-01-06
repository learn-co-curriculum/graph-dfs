function isPath(graph, vertexA, vertexB, visited = new Set()) {
  if (graph[vertexA].includes(vertexB)) {
    return true;
  }

  const hasVisited = new Set(visited);
  hasVisited.add(vertexA);

  for (const vertex of graph[vertexA]) {
    if (!hasVisited.has(vertex)) {
      if (isPath(graph, vertex, vertexB, hasVisited)) {
        return true;
      }
    }
  }

  return false;
}

if (require.main === module) {
  // add your own tests in here
  let graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "dave"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "dave", "jambaby"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "jan"));

  graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave"],
    dave: ["jan"],
    mittens: []
  };

  console.log("");

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "jan"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "mittens"));

  graph = {
    jan: ["john", "jambaby", "malala"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby", "dave", "martin"],
    dave: ["jan"],
    mittens: [],
    martin: ["mittens"],
    malala: ["dave", "carl", "martin", "pirate"],
    pirate: ["shiba", "inu"],
    shiba: [],
    inu: []
  };

  console.log("");

  console.log("Expecting: true");
  console.log(isPath(graph, "carl", "inu"));
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution
