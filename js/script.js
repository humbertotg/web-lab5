$( document ).ready(function() {

    $("#ButtonPost").on("click", function(event) {
        event.preventDefault()
        var todo = $("<div>")
        todo.append('<input type="checkbox" name="todo">');
        todo.append('<label>'+ $("#todoText").val() + '</label>');
        $("#listOfTodos").append(todo);
        $("#todoText").val("");
    });

    $("#ButtonClear").on("click", function() {
        $("input[name='todo']").prop("checked", false);
    });

    $("#ButtonMark").on("click", function() {
        $("input[name='todo']").prop("checked", true);
    });

    $("#ButtonDelete").on("click", function() {
        $("#todoList").empty();
    });

});