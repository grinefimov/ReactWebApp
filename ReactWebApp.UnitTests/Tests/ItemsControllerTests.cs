using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactWebApp;
using ReactWebApp.Controllers;
using ReactWebApp.Models;
using Xunit;

namespace ReactWebApp.UnitTests.Tests
{
    public class ItemsControllerTests
    {
        [Fact]
        public async void GetItemsAsync_ShouldReturnAllItems()
        {
            // Arrange
            var controller = new ItemsController();

            // Act
            var result = controller.GetItemsAsync();

            // Assert
            var actionResult = Assert.IsType<ActionResult<IEnumerable<Item>>>(result);
            List<Item> value = actionResult.Value as List<Item>;
            Assert.Equal("data 1-1", value?[0].Data1);
        }
    }
}
