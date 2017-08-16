function CommandGeneration() { }

CommandGeneration.prototype.GenerateGetCommands = function(block_types) {
    // Generates all the GET commands
    // Args: List of all possible block types
    // Returns: List of all valid GET commands for the block tpes
    var commands = new Array();
    block_types.forEach(function (btype) {
        commands.push('get a ' + btype + ' block');
    })
    return commands;
}

CommandGeneration.prototype.GenerateMoveCommands = function(block_ids) {
    // Generates all the MOVE commands
    // Args: List of all block IDs that are presume to be in the workspace
    // Returns: List of all valid MOVE commands
    var commands = new Array();
	var even = false;
    block_ids.forEach(function (blockid1) {
		if(even)
			block_ids.forEach(function (blockid2) {
				// Redundents, but we can get rid of these later
				commands.push('connect block ' + blockid1 + ' under block ' + blockid2);
				commands.push('connect block ' + blockid2 + ' under block ' + blockid1);
				commands.push('connect block ' + blockid1 + ' inside block ' + blockid2);
				commands.push('connect block ' + blockid2 + ' inside block ' + blockid1);
			});
		even = !even;
    });
    return commands;
}