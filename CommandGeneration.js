function CommandGeneration() { }

// Generates all the GET commands
// Args: List of all possible block types
// Returns: List of all valid GET commands for the block tpes
CommandGeneration.prototype.GenerateGetCommands = function(block_types) {
    var commands = [];
    block_types.forEach(function (btype) {
        commands.push('get a ' + btype + ' block');
    })
    return commands;
}

// Generates all the MOVE commands
// Args: List of all block IDs that are presume to be in the workspace
// Returns: List of all valid MOVE commands
CommandGeneration.prototype.GenerateMoveCommands = function(block_ids) {
    var commands = [];
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

// Generates all CHANGE commands
// Args: block_ids: List of all block IDs that are presumed to be in the workspace
//		 value_sets: List of all value sets for fields
// Returns: List of all CHANGE commands

CommandGeneration.prototype.GenerateChangeCommands = function(block_ids, value_sets) {
	var commands = [];
	block_ids.forEach(function (bid) {
		value_sets.forEach(function(value_set) {
			for(var i = 0; i < value_set.length - 1; i++) {
				for(var j = i + 1; j < value_set.length; j++) {
					commands.push('change ' + value_set[i] + ' in block ' + bid + ' to ' + value_set[j]);
					commands.push('change ' + value_set[j] + ' in block ' + bid + ' to ' + value_set[i]);
				}
			}
		});
	});
	return commands;
}