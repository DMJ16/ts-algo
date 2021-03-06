import { Graph } from "../../dataStructures";

describe("Graph", () => {
  const graph: Graph = new Graph();

  test("add vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    expect(Object.keys(graph.adjList).length).toBe(6);
  });

  test("add edges", () => {
    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    expect(graph.adjList["A"].length).toBe(2);
    expect(graph.adjList["B"].length).toBe(2);
    expect(graph.adjList["E"].length).toBe(3);
    expect(graph.adjList["C"].length).toBe(3);
    expect(graph.adjList["D"].length).toBe(3);
    expect(graph.adjList["F"].length).toBe(3);
  });

  test("dfs recursive and iterative traversal", () => {
    expect(graph.dfsIterative("A")).toStrictEqual([
      "A",
      "C",
      "F",
      "E",
      "D",
      "B",
    ]);

    expect(graph.dfsRecursive("A")).toStrictEqual([
      "A",
      "B",
      "E",
      "D",
      "C",
      "F",
    ]);
  });

  test("bfs traversal", () => {
    expect(graph.bfs("A")).toStrictEqual(["A", "B", "C", "E", "D", "F"]);
  });

  test("topological sort ", () => {
    const dag = new Graph();
    dag.addVertex("A");
    dag.addVertex("B");
    dag.addVertex("C");
    dag.addVertex("D");
    dag.addVertex("E");
    dag.addVertex("F");
    dag.addVertex("G");
    dag.addEdge("A", "C", 1);
    dag.addEdge("A", "B", 1);
    dag.addEdge("A", "D", 1);
    dag.addEdge("C", "D", 1);
    dag.addEdge("D", "E", 1);
    dag.addEdge("E", "F", 1);
    dag.addEdge("B", "G", 1);
    expect(dag.topologicalSort()).toStrictEqual([
      "A",
      "B",
      "G",
      "C",
      "D",
      "E",
      "F",
    ]);
  });

  test("Dijkstra's Algorithm", () => {
    expect(graph.Dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
  });

  test("remove edges", () => {
    graph.removeEdge("A", "B");
    graph.removeEdge("A", "C");
    graph.removeEdge("B", "E");
    graph.removeEdge("C", "D");
    graph.removeEdge("C", "F");
    graph.removeEdge("D", "E");
    graph.removeEdge("D", "F");
    graph.removeEdge("E", "F");
    expect(graph.adjList["A"].length).toBe(0);
    expect(graph.adjList["B"].length).toBe(0);
    expect(graph.adjList["E"].length).toBe(0);
    expect(graph.adjList["C"].length).toBe(0);
    expect(graph.adjList["D"].length).toBe(0);
    expect(graph.adjList["F"].length).toBe(0);
  });

  test("remove vertices and edges", () => {
    graph.removeVertex("A");
    graph.removeVertex("B");
    graph.removeVertex("C");
    graph.removeVertex("D");
    graph.removeVertex("E");
    graph.removeVertex("F");
    expect(Object.keys(graph.adjList).length).toBe(0);
    expect(graph.adjList["A"]).toBeUndefined();
    expect(graph.adjList["B"]).toBeUndefined();
    expect(graph.adjList["E"]).toBeUndefined();
    expect(graph.adjList["C"]).toBeUndefined();
    expect(graph.adjList["D"]).toBeUndefined();
    expect(graph.adjList["F"]).toBeUndefined();
  });
});
