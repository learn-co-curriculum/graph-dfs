require "set"

def is_path(graph, vertex_a, vertex_b, visited = Set.new)
  return true if graph[vertex_a].include?(vertex_b)

  has_visited = Set.new(visited)
  has_visited.add(vertex_a)

  idx = 0

  while idx < graph[vertex_a].length
    vertex = graph[vertex_a][idx]
    idx += 1
    next if has_visited.include?(vertex)
    return true if is_path(graph, vertex, vertex_b, has_visited)
  end

  false
end

if __FILE__ == $PROGRAM_NAME
  graph = {
    jan: [:john, :jambaby],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby],
    dave: []
  }
  
  puts "Expecting: true"
  puts is_path(graph, :jan, :carl)

  puts

  puts "Expecting: false"
  puts is_path(graph, :jan, :dave)

  # Don't forget to add your own!
  puts "Expecting: false"
  puts is_path(graph, :dave, :jambaby)

  puts ""

  puts "Expecting: false"
  puts is_path(graph, :jan, :jan)

  graph = {
    jan: [:john, :jambaby],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby, :dave],
    dave: [:jan],
    mittens: []
  }

  puts ""

  puts "Expecting: true"
  puts is_path(graph, :jan, :jan)

  puts ""

  puts "Expecting: false"
  puts is_path(graph, :jan, :mittens)

  graph = {
    jan: [:john, :jambaby, :malala],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby, :dave, :martin],
    dave: [:jan],
    mittens: [],
    martin: [:mittens],
    malala: [:dave, :carl, :martin, :pirate],
    pirate: [:shiba, :inu],
    shiba: [],
    inu: []
  }

  puts ""

  puts "Expecting: true"
  puts is_path(graph, :carl, :inu)
end

# Please add your pseudocode to this file
# And a written explanation of your solution
